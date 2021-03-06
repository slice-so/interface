import ActionScreen from "../ActionScreen"
import Button from "../Button"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import Spinner from "@components/icons/Spinner"

type Props = {
  children: JSX.Element
  elementsArray: any[]
  setIterator: Dispatch<SetStateAction<number>>
  itemsIncrement?: number
  actionScreenText?: string
  actionScreenHref?: string
  actionScreenButtonLabel?: string
  endpageButtonLabel?: string
  endpageHref?: string
}

const ListLayout = ({
  elementsArray,
  setIterator,
  itemsIncrement = 6,
  actionScreenText,
  actionScreenHref,
  actionScreenButtonLabel,
  endpageButtonLabel = actionScreenButtonLabel,
  endpageHref = actionScreenHref,
  children,
}: Props) => {
  const [items, setItems] = useState(itemsIncrement)

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        setItems(itemsIncrement)
        setIterator(
          items < elementsArray?.length ? items : elementsArray?.length
        )
      })
    }
  }, [])

  useEffect(() => {
    if (elementsArray) {
      setIterator(items < elementsArray?.length ? items : elementsArray?.length)
    }
  }, [elementsArray, items])

  return !elementsArray ? (
    <div className="flex justify-center pb-20">
      <Spinner size="w-10 h-10" />
    </div>
  ) : elementsArray?.length != 0 ? (
    <div className="pt-4 sm:pt-8">
      {children}
      <div className="pt-10 pb-6 space-y-8">
        {items < elementsArray?.length && (
          <p className="text-center">
            <a
              className="underline"
              onClick={() => setItems(items + itemsIncrement)}
            >
              Load more
            </a>
          </p>
        )}
        {endpageButtonLabel && (
          <div className="flex justify-center pt-4 sm:pt-8">
            <Button label={endpageButtonLabel} href={endpageHref} />
          </div>
        )}
      </div>
    </div>
  ) : (
    <ActionScreen
      text={actionScreenText}
      buttonLabel={actionScreenButtonLabel}
      href={actionScreenHref}
    />
  )
}

export default ListLayout
