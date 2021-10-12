import Button from "../Button"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { SlicerReduced } from "pages/slicer"
import { Card, FiltersMenu } from ".."
import Collectible from "@components/icons/Collectible"

type Props = {
  data: SlicerReduced[]
}

const SlicersGrid = ({ data }: Props) => {
  const initItems = 12
  const [items, setItems] = useState(initItems)
  const [iterator, setIterator] = useState(0)
  const [filteredSlicers, setFilteredSlicers] = useState<SlicerReduced[]>(data)
  const [searchFilteredSlicers, setSearchFilteredSlicers] =
    useState<SlicerReduced[]>(null)
  const filteredData = searchFilteredSlicers || filteredSlicers

  const [showCollectibles, setShowCollectibles] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const performSearch = async (
    searchTerm: string,
    data: any[],
    setData: Dispatch<SetStateAction<any[]>>
  ) => {
    const search = (await import("@utils/search")).default
    search(searchTerm, data, setData)
  }

  useEffect(() => {
    setIterator(0)
    const newFilteredSlicers = data.filter((el) => {
      const onlyCollectibles = showCollectibles
        ? el.isCollectible == showCollectibles
        : true
      return onlyCollectibles
    })
    setFilteredSlicers(newFilteredSlicers)
  }, [showCollectibles])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchTerm) {
        setIterator(0)
      }
      performSearch(searchTerm, filteredSlicers, setSearchFilteredSlicers)
    }, 200)
    return () => {
      clearTimeout(timeout)
    }
  }, [searchTerm, filteredSlicers])

  useEffect(() => {
    setIterator(items < filteredData.length ? items : filteredData.length)
  }, [filteredData])

  return (
    <>
      <FiltersMenu
        setSearchTerm={setSearchTerm}
        showCollectibles={showCollectibles}
        setShowCollectibles={setShowCollectibles}
      />
      <div className="grid items-center justify-center grid-cols-1 gap-2 max-w-[400px] sm:gap-6 lg:gap-8 sm:max-w-[550px] mx-auto sm:grid-cols-2 md:max-w-none md:grid-cols-3">
        {[...Array(iterator)].map((el, key) => {
          const slicerData = filteredData[key]
          const { id, name, image, isCollectible } = slicerData
          const slicerLink = `/slicer/${id}`
          const slicerName = name || `Slicer #${id}`
          return (
            <Card
              key={key}
              name={slicerName}
              image={image}
              href={slicerLink}
              className="rounded-none"
              size="h-44"
              topLeft={
                isCollectible && {
                  title: "Collectible asset",
                  content: (
                    <Collectible className="py-2 text-indigo-600 w-[38px] h-[38px]" />
                  ),
                  padding: "px-4",
                }
              }
            >
              <p className="mr-2 text-lg font-medium">{slicerName}</p>
            </Card>
          )
        })}
      </div>
      <div className="pt-10 pb-4 space-y-8">
        {items < filteredSlicers.length && (
          <p className="text-center">
            <a onClick={() => setItems(items + initItems)}>Load more</a>
          </p>
        )}
        <div className="flex justify-center">
          <Button label="Create a new slicer" href="/slice" />
        </div>
      </div>
    </>
  )
}

export default SlicersGrid

// Todo: refactor & remove setIterator(0)
