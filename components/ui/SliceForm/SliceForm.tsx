import { useState, Dispatch, SetStateAction } from "react"
import { Button, SliceFormBlockSplitter } from "@components/ui"
import { Slice } from "@lib/handlers/chain"
import handleSubmit from "@utils/handleSubmit"
import handleMessage, { Message } from "@utils/handleMessage"
import { LogDescription } from "ethers/lib/utils"
import MessageBlock from "../MessageBlock"
import Input from "../Input"

type Props = {
  success: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  setSuccess: Dispatch<SetStateAction<boolean>>
  setLogs: Dispatch<SetStateAction<LogDescription[]>>
}

const SliceForm = ({ success, setLoading, setSuccess, setLogs }: Props) => {
  const [addresses, setAddresses] = useState([""])
  const [shares, setShares] = useState([1000000])
  const [minimumShares, setMinimumShares] = useState(0)
  const [totalShares, setTotalShares] = useState(1000000)
  const [isCollectible, setIsCollectible] = useState(false)
  const [message, setMessage] = useState<Message>()

  const cleanedAddresses = addresses.filter(() => true)
  const cleanedShares = shares.filter(() => true)

  const submit = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    try {
      if (
        cleanedShares.length == cleanedAddresses.length &&
        cleanedShares.length <= 30
      ) {
        const eventLogs = await handleSubmit(
          Slice(cleanedAddresses, cleanedShares, minimumShares, isCollectible),
          setMessage,
          setLoading,
          setSuccess,
          true
        )
        setLogs(eventLogs)
      } else {
        handleMessage(
          {
            message: "Inputs don't correspond, please try again",
            messageStatus: "error",
          },
          setMessage
        )
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form
      className="w-full max-w-screen-sm py-6 mx-auto space-y-4"
      onSubmit={submit}
    >
      <SliceFormBlockSplitter
        success={success}
        addresses={addresses}
        shares={shares}
        minimumShares={minimumShares}
        totalShares={totalShares}
        isCollectible={isCollectible}
        setAddresses={setAddresses}
        setShares={setShares}
        setMinimumShares={setMinimumShares}
        setTotalShares={setTotalShares}
        setIsCollectible={setIsCollectible}
      />
      <div className="py-8">
        <p>
          <strong>Note:</strong> minimum and total slices cannot be changed
          later.
        </p>
        {totalShares === 1 && (
          <p className="pt-4">
            <strong>Note:</strong> You are about to create a non-fractional
            Slicer. That means that there can only be a single owner at any
            given time which gets all ETH earned by the slicer.
          </p>
        )}
        <p className="pt-4">
          <strong>Note:</strong> This version of Slice runs on Rinkeby Testnet,
          so it does not use real ETH. You can get some ETH on Rinkeby{" "}
          <a
            href="https://faucet.rinkeby.io"
            target="_blank"
            rel="noreferrer"
            className="font-black highlight"
          >
            here
          </a>
          .
        </p>
      </div>
      <div className="py-1">
        <Button label="Slice" type="submit" />
      </div>
      <div>
        <MessageBlock msg={message} />
      </div>
    </form>
  )
}

export default SliceForm

// Todo: Add isCollectible in form
