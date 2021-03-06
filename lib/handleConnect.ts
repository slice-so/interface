import saEvent from "@utils/saEvent"
import WalletConnect from "@walletconnect/client"
import { Dispatch, SetStateAction } from "react"
import { View } from "./content/modals"

export const handleConnectMetamask = async (
  setModalView: Dispatch<SetStateAction<View>>
) => {
  try {
    saEvent("connect_wallet_attempt_mm")
    await window.ethereum.request({ method: "eth_requestAccounts" })
    setModalView({ name: "" })
    saEvent("connect_wallet_success_mm")
  } catch (err) {
    console.log(err)
  }
}

export const handleConnectWC = async (
  connector: WalletConnect,
  setModalView: Dispatch<SetStateAction<View>>
) => {
  try {
    // Check if connection is already established
    if (!connector.connected) {
      saEvent("connect_wallet_attempt_wc")
      // create new session
      await connector.createSession()
      setModalView({ name: "" })
      saEvent("connect_wallet_success_wc")
    }
  } catch (err) {
    console.log(err)
  }
}
