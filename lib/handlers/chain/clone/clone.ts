import { ContractInterface, ethers, Signer } from "ethers"

export type DeployParamsClone = {
  slicerId: number
  args: any[]
}

const clone = async (
  clonerAddress: string,
  abi: ContractInterface,
  signer: Signer,
  deployParams: DeployParamsClone
) => {
  const productsModule = process.env.NEXT_PUBLIC_PRODUCTS_ADDRESS

  const { slicerId, args } = deployParams

  try {
    const contract = new ethers.Contract(clonerAddress, abi, signer)

    const call = await contract.clone(productsModule, slicerId, ...args)
    const wait = await call.wait()
    const cloneAddress = wait.events[0].address

    return [cloneAddress, contract, call]
  } catch (err) {
    console.log(err)
  }
}

export default clone
