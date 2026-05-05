import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { transaction_id } = body;

    if (!transaction_id) {
      return NextResponse.json(
        { success: false, message: "No transaction ID" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    // ✅ Validate payment
    if (
      data.status === "success" &&
      data.data.status === "successful"
    ) {
      return NextResponse.json({
        success: true,
        data: data.data,
      });
    }

    return NextResponse.json({
      success: false,
      message: "Payment not successful",
    });

  } catch (error) {
    console.error("VERIFY ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}