import { DeployParams } from "@lib/handlers/chain/cloneProjectPayer/cloneProjectPayer"
import { ethers } from "ethers"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useAppContext } from "../context"
import Input from "../Input"
import InputAddress from "../InputAddress"
import MySwitch from "../MySwitch"

type Props = {
  params: DeployParams
  setParams: Dispatch<SetStateAction<DeployParams>>
}

const JbPayerForm = ({ params, setParams }: Props) => {
  const { account } = useAppContext()
  const [projectId, setProjectId] = useState(0)
  const [memo, setMemo] = useState("Sent from Slice 🍰")
  const [mintTokens, setMintTokens] = useState(false)
  const [preferStakedTokens, setPreferStakedTokens] = useState(false)

  const [ownerAddress, setOwnerAddress] = useState(account || "")
  const [resolvedOwnerAddress, setResolvedOwnerAddress] = useState("")
  const owner =
    ownerAddress.substring(ownerAddress.length - 4) !== ".eth"
      ? ownerAddress
      : resolvedOwnerAddress

  const [beneficiaryAddress, setBeneficiaryAddress] = useState("")
  const [resolvedBeneficiaryAddress, setResolvedBeneficiaryAddress] =
    useState("")
  const beneficiary =
    beneficiaryAddress.substring(beneficiaryAddress.length - 4) !== ".eth"
      ? beneficiaryAddress
      : resolvedBeneficiaryAddress

  useEffect(() => {
    if (owner == "" && account) {
      setOwnerAddress(account)
    }
  }, [account])

  useEffect(() => {
    const initParams = params
    const preferAddToBalance = !mintTokens
    const preferClaimedTokens = !preferStakedTokens

    setParams({
      projectId: Number(projectId),
      beneficiary: mintTokens ? beneficiary : ethers.constants.AddressZero,
      preferClaimedTokens,
      memo,
      metadata: initParams.metadata,
      preferAddToBalance,
      directory: initParams.directory,
      owner
    })
  }, [projectId, mintTokens, beneficiary, preferStakedTokens, memo, owner])

  return (
    <div className="space-y-7">
      <div>
        <Input
          label="Project Id"
          type="number"
          min={1}
          value={projectId || ""}
          onChange={setProjectId}
          placeholder="Your Juicebox V2 Project ID"
        />
      </div>
      <div>
        <InputAddress
          label="Owner address"
          address={ownerAddress}
          onChange={setOwnerAddress}
          resolvedAddress={resolvedOwnerAddress}
          setResolvedAddress={setResolvedOwnerAddress}
          placeholder="Connect your wallet to fill your address"
        />
      </div>
      <div>
        <Input
          label="Memo"
          value={memo}
          onChange={setMemo}
          placeholder='Set the text that will appear in "activity"'
        />
      </div>
      <div className="flex justify-end pt-4">
        <p className="pr-2">Mint treasury tokens</p>
        <MySwitch enabled={mintTokens} setEnabled={setMintTokens} />
      </div>
      {mintTokens && (
        <>
          <div>
            <InputAddress
              label="Beneficiary"
              address={beneficiaryAddress}
              onChange={setBeneficiaryAddress}
              resolvedAddress={resolvedBeneficiaryAddress}
              setResolvedAddress={setResolvedBeneficiaryAddress}
              placeholder="The address who receives the tokens"
              required={mintTokens}
            />
          </div>

          <div className="flex justify-end pt-4">
            <p className="pr-2">Mint staked tokens</p>
            <MySwitch
              enabled={preferStakedTokens}
              setEnabled={setPreferStakedTokens}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default JbPayerForm
