import ShoppingBag from "@components/icons/ShoppingBag"
import Units from "@components/icons/Units"
import { ProductCart } from "@lib/handleUpdateCart"
import formatNumber from "@utils/formatNumber"
import { ethers, utils } from "ethers"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { Card, CartButton } from ".."
import { Purchase, useAppContext } from "../context"
import { Product } from "../SlicerProducts/SlicerProducts"

type Props = {
  slicerId: number
  slicerAddress: string
  product: Product
  chainInfo: any
  ethUsd: {
    symbol: string
    price: string
  }
  editMode: boolean
}

const ProductCard = ({
  slicerId,
  slicerAddress,
  product,
  chainInfo,
  ethUsd,
  editMode
}: Props) => {
  const [cookies] = useCookies(["cart"])
  const { setModalView, purchases } = useAppContext()
  const {
    productId,
    name,
    shortDescription,
    description,
    hash,
    image,
    purchaseInfo,
    uid,
    creator,
    texts
  } = product
  const prices = chainInfo?.prices
  const ethPrice = prices?.find(
    (price) => price.currency.id == ethers.constants.AddressZero
  )
  const isUSD = ethPrice?.dynamicPricing
  const price = ethPrice?.price

  // TODO Refactor this to handle  multiple currencies

  const isInfinite = chainInfo?.isInfinite
  const isMultiple = chainInfo?.isMultiple
  const availableUnits = chainInfo?.availableUnits
  const totalPurchases = chainInfo?.totalPurchases
  const extAddress = chainInfo?.extAddress
  const extValue = chainInfo?.extValue
  const extCheckSig = chainInfo?.extCheckSig
  const extExecSig = chainInfo?.extExecSig

  const totalPrice = price && extValue && Number(price) + Number(extValue)
  const externalCallEth = extValue && utils.formatEther(extValue)
  const externalCallUsd =
    externalCallEth && Number(externalCallEth) * Number(ethUsd?.price) * 100

  // const createdAtTimestamp = chainInfo?.createdAtTimestamp

  const [convertedEthUsd, setConvertedEthUsd] = useState(0)
  const [purchasedQuantity, setPurchasedQuantity] = useState(0)

  const productPrice =
    chainInfo && ethPrice && extValue
      ? {
          eth: `Ξ ${
            isUSD ? convertedEthUsd : Math.floor(totalPrice / 10 ** 14) / 10000
          }`,
          usd: `$ ${
            isUSD
              ? formatNumber((Number(price) + externalCallUsd) / 100)
              : convertedEthUsd
          }`
        }
      : {
          eth: "Ξ ...",
          usd: "$ ..."
        }
  const cookieCart: ProductCart[] = cookies?.cart
  const productCart: ProductCart = cookieCart?.find(
    (product) =>
      product.slicerAddress == slicerAddress && product.productId == productId
  )
  const availabilityColor =
    availableUnits &&
    (availableUnits < 10
      ? availableUnits == 0
        ? "text-red-500"
        : "text-yellow-600"
      : "text-green-600")

  //todo: optimize
  useEffect(() => {
    setPurchasedQuantity(0)
    purchases?.map((p: Purchase) => {
      if (
        p.slicerId === String(slicerId) &&
        p.productId === String(productId)
      ) {
        setPurchasedQuantity(Number(p.quantity))
      }
    })
  }, [purchases])

  const handleOnClick = () => {
    setModalView({
      name: "PRODUCT_VIEW",
      cross: true,
      params: {
        slicerId,
        productId,
        name,
        shortDescription,
        description,
        image,
        uid,
        creator,
        texts,
        productPrice,
        isUSD,
        isInfinite,
        isMultiple,
        availableUnits,
        totalPurchases,
        purchaseInfo,
        slicerAddress,
        price,
        editMode,
        purchasedQuantity,
        availabilityColor
      }
    })
  }

  useEffect(() => {
    if (totalPrice && ethUsd) {
      if (isUSD) {
        const convertedPrice =
          Math.floor(
            ((Number(price) + externalCallUsd) * 100) / Number(ethUsd?.price)
          ) / 10000
        setConvertedEthUsd(convertedPrice)
      } else {
        const convertedPrice =
          Math.floor((totalPrice / 10 ** 16) * Number(ethUsd?.price)) / 100
        setConvertedEthUsd(convertedPrice)
      }
    }
  }, [price, ethUsd])

  return (
    <div className="h-full">
      <Card
        product
        containerClassName="h-full cursor-pointer"
        cardClassName="group h-full overflow-hidden transition-all duration-1000 ease-out bg-white rounded-xl shadow-medium-random hover:scale-[1.025]"
        className="rounded-none"
        name={name}
        image={image}
        size="h-52"
        topLeft={{
          title: "Purchases",
          content: (
            <>
              {totalPurchases && (
                <p className="mr-2 text-indigo-600">
                  {formatNumber(totalPurchases)}
                </p>
              )}
              <ShoppingBag className="w-[18px] h-[18px] text-indigo-600" />
            </>
          )
        }}
        topRight={{
          title: "Product price",
          content: (
            <p className="text-sm font-medium text-black">{productPrice.eth}</p>
          )
        }}
        bottomLeft={
          chainInfo &&
          !isInfinite && {
            title: "Available units",
            content: (
              <>
                <p className={`mr-2 ${availabilityColor}`}>
                  {formatNumber(availableUnits)}
                </p>
                <Units className={`w-[18px] h-[18px] ${availabilityColor}`} />
              </>
            )
          }
        }
        onClick={() => (chainInfo ? handleOnClick() : null)}
      >
        <div>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap items-center mr-24">
              <p className="mr-2 font-medium">{name}</p>
              <p className="h-5 mt-1 text-xs font-normal text-gray-500">
                #{productId}
              </p>
            </div>
          </div>
          <div className="absolute top-0 right-0 flex items-center justify-center w-24 h-[56px] my-auto mr-5">
            <div
              className="absolute w-full h-full"
              onClick={() => (chainInfo ? handleOnClick() : null)}
            />
            {chainInfo && !editMode && (
              <CartButton
                slicerId={slicerId}
                productCart={productCart}
                slicerAddress={slicerAddress}
                productId={productId}
                price={String(totalPrice)}
                isUSD={isUSD}
                image={image}
                name={name}
                isMultiple={isMultiple}
                availableUnits={isInfinite ? -1 : availableUnits}
                purchasedQuantity={purchasedQuantity}
                uid={uid}
                creator={creator}
                texts={texts}
              />
            )}
          </div>
          {shortDescription && (
            <div>
              <p className="pt-6 overflow-hidden text-gray-500 overflow-ellipsis">
                {shortDescription}
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

export default ProductCard

// Todo: solve absolute element not covering the whole card when content doesn't reach the end
