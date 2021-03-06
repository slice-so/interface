import Spinner from "@components/icons/Spinner"
import { PaySlicer, SponsorListItem } from "@components/ui"
import { AddressAmount } from "pages/slicer/[id]"
import { useState } from "react"
import ListLayout from "../ListLayout"

type Props = {
  sponsors: AddressAmount[]
  slicerId: string
  slicerAddress: string
  sponsorData: object
  editMode: boolean
  tag: string
  loading: boolean
}

const SlicerSponsors = ({
  slicerId,
  sponsorData,
  sponsors,
  slicerAddress,
  editMode,
  tag,
  loading,
}: Props) => {
  const [iterator, setIterator] = useState(0)

  return (
    <div className="max-w-sm mx-auto">
      {loading ? (
        <>
          <div className="flex justify-center w-full pt-4 pb-12 text-center">
            <Spinner size="h-10 w-10" />
          </div>
          <hr className="w-20 mx-auto mt-16 mb-6 border-gray-300" />
        </>
      ) : (
        sponsors.length != 0 && (
          <>
            <div className="pt-8 text-center">
              <h2 className="pb-12">
                {tag === "Charity" ? "Donors" : "Sponsors"}
              </h2>
              <ListLayout
                elementsArray={sponsors}
                setIterator={setIterator}
                itemsIncrement={10}
              >
                <ul className="space-y-5">
                  {[...Array(iterator)].map((el, key) => {
                    const sponsor = sponsors[Number(key)]
                    return (
                      <SponsorListItem
                        slicerId={slicerId}
                        sponsor={sponsor}
                        key={key}
                        sponsorLink={sponsorData[sponsor.address]}
                      />
                    )
                  })}
                </ul>
              </ListLayout>
            </div>
            <hr className="w-20 mx-auto mt-6 mb-6 border-gray-300" />
          </>
        )
      )}
      {!editMode && (
        <div className="pt-4 pb-12 text-center">
          <p className="py-10">
            {tag === "Charity" ? "Donate to" : "Sponsor"} this slicer by sending
            ETH to its address
          </p>
          <PaySlicer slicerAddress={slicerAddress} />
        </div>
      )}
    </div>
  )
}

export default SlicerSponsors

// Todo?:
//  - allow superusers to hide sponsorLinks in editMode
//  - make first sponsors bigger or more highlighted
