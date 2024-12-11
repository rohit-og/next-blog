import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
    await connectDB();
}
LoadDB();
export async function POST(req){
    const formData = await req.formData();
    const emailData = {
        email: `${formData.get('email')}`,
    }
    await EmailModel.create(emailData);
    return NextResponse.json({success: true, message: 'Email subscribed'});

}

export async function GET(req){
    const emails = await EmailModel.find({});
    return NextResponse.json({emails});
}

// delete email
export async function DELETE(req){
    const id = await req.nextUrl.searchParams.get('id');
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({success: true, message: 'Email deleted'});
}
