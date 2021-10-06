import { FC } from "react"
import Link from "next/link"
import { useAppContext } from "@components/ui/context"

interface Props {
  logoText?: string
  size?: string
  position?: string
  inactive?: boolean
  inverted?: boolean
  color?: string
}

const DoubleText: FC<Props> = ({
  logoText,
  size,
  position,
  inactive,
  inverted,
  color,
}) => {
  const { color1, color2, darkColor1, darkColor2 } = useAppContext()
  const text = logoText || "Slice"

  return (
    <span
      className={`inline-block relative ${inactive ? "" : "group "}${
        position ? position : "absolute top-0 left-0"
      }`}
    >
      {inactive ? (
        <span
          className={`${
            inverted ? "text-white" : "text-black"
          } relative z-10 !font-black cursor-default ${
            size || "text-2xl md:text-3xl"
          }`}
        >
          {text}
        </span>
      ) : (
        <Link href="/">
          <a
            className={`${
              inverted ? "text-white" : "text-black"
            } relative z-10 !font-black ${size || "text-2xl md:text-3xl"}`}
          >
            {text}
          </a>
        </Link>
      )}
      <span
        className={`absolute top-0 left-0 w-full select-none !font-black mt-[0.1em] ml-[0.1em] group-hover:mt-0 group-hover:ml-0 duration-150 ${
          inactive ? "cursor-default" : ""
        }
        ${size || "text-2xl md:text-3xl"} ${
          color ||
          `text-transparent bg-gradient-to-br bg-clip-text ${
            inverted
              ? `${darkColor1[3]} ${darkColor2[4]}`
              : `${color1[3]} ${color2[4]}`
          }`
        }`}
        style={{ marginTop: "0.1em", marginBottom: 0 }}
      >
        {text}
      </span>
    </span>
  )
}

export default DoubleText
