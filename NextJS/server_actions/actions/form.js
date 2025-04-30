"use server"
import fs from "fs/promises"

export const SubmitAction= async (e) => {

    console.log(e.get("name"),e.get("add"))

    let a= await fs.writeFile(`${e.get("name")}.txt`,`bolo bhai, Meh hii hoon ${e.get("name")} and meh yaha rahta hoon ${e.get("add")}`)

  }