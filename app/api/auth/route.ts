import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const codeParameter = await request.json();
    const res = await fetch(`${process.env.BACK_URL}/auth/sign-in`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(codeParameter),
    });

    if (!res.ok)
      return NextResponse.json(
        { message: "authentication failed" },
        { status: 401 }
      );
    const cookies = res.headers.get("set-cookie");
    if (cookies) {
      return NextResponse.json(
        { message: "Login successful" },
        {
          status: 200,
          headers: {
            "set-cookie": cookies,
          },
        }
      );
    }
  } catch (error) {
    // logging({
    //   logData: `${(error as Error).message} stack: ${(error as Error).stack}`,
    //   methodName: "Post Method in api/auth",
    // });
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// export async function GET(req: NextRequest, res: NextResponse) {
//   const cookies = req.cookies.get("accessToken")?.value;
//   const resApi = await fetch(`${process.env.BACK_URL}/auth/sign-out`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Cookie: cookies!.toString(), // Send cookies with the request
//     },
//     credentials: "include", // This is the key part
//   });
//   if (resApi.ok) {
//     const cookies = resApi.headers.get("set-cookie");
//     return NextResponse.json(
//       { message: "LogOut successful" },
//       {
//         status: 200,
//         headers: {
//           "set-cookie": cookies!,
//         },
//       }
//     );
//   }
// }
