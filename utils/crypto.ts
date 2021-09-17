import { Crypto } from "@peculiar/webcrypto"

export const generateKey = async (password: string, salt: Buffer) => {
  const crypto: Crypto = new Crypto()
  let enc = new TextEncoder()

  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  )

  const key = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  )

  return key
}

export const importKey = async (key: object) =>
  await window.crypto.subtle.importKey(
    "jwk",
    key,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt", "encrypt"]
  )

export const encryptFiles = async (
  key: CryptoKey,
  iv: Uint8Array,
  files: File[],
  texts: {
    value: string
    filename: string
  }[]
) => {
  const encryptedFiles: File[] = []

  for (let i = 0; i < files.length; i++) {
    const fileExt = files[i].name.split(".").pop()
    const buf = await files[i].arrayBuffer()
    const encryptedBuf: ArrayBuffer = await window.crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      key,
      buf
    )
    const encryptedFile = new File([encryptedBuf], `${i + 1}.${fileExt}`, {
      type: files[i].type,
    })
    encryptedFiles.push(encryptedFile)
  }

  for (let i = 0; i < texts.length; i++) {
    const text = texts[i]
    const encryptedText = await encryptText(key, iv, text.value, text.filename)
    encryptedFiles.push(encryptedText)
  }

  return encryptedFiles
}

export const decryptFiles = async (
  key: CryptoKey,
  iv: Uint8Array,
  files: File[]
) => {
  const decryptedFiles: File[] = []

  for (let i = 0; i < files.length; i++) {
    const buf = await files[i].arrayBuffer()
    const decryptedBuf: ArrayBuffer = await window.crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      key,
      buf
    )
    const decryptedFile = new File([decryptedBuf], files[i].name, {
      type: files[i].type,
    })
    decryptedFiles.push(decryptedFile)
  }

  return decryptedFiles
}

export const encryptText = async (
  key: CryptoKey,
  iv: Uint8Array,
  text: string,
  filename: string
) => {
  const enc = new TextEncoder()
  const encoded = enc.encode(text)

  const encryptedBuf: ArrayBuffer = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    encoded
  )

  const encryptedFile = new File([encryptedBuf], filename, {
    type: "text/plain",
  })

  return encryptedFile
}

export const decryptText = async (
  key: CryptoKey,
  iv: Uint8Array,
  encoded: File
) => {
  const dec = new TextDecoder()
  const buf = await encoded.arrayBuffer()

  const decryptedBuf: ArrayBuffer = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    buf
  )
  const decryptedText = dec.decode(decryptedBuf)

  return decryptedText
}
