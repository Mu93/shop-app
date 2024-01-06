import { NextResponse, NextRequest } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(req, res) {
  const jsonDirectory = path.join(process.cwd(), "app/data");
  const fileContents = await fs.readFile(
    jsonDirectory + "/products.json",
    "utf8"
  );

  return NextResponse.json(JSON.parse(fileContents));
}
