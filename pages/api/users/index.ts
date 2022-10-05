import { NextApiRequest, NextApiResponse } from "next";
// import { sampleUserData } from "../../../utils/sample-data";
import mockData from "../../../public/data/mock-data.json";
import { mockUser } from "../../../interfaces";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const mockUserData: mockUser[] = mockData;
  try {
    if (!Array.isArray(mockUserData)) {
      throw new Error("Cannot find user data");
    }

    res.status(200).json(mockUserData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
