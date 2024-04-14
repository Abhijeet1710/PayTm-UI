import { useState } from "react"
import { Card } from "./card"
import { TextInput } from "./TextInput"
import { Button } from "./button"

export async function sendMoneyToAFriend(_phone: string, amount: number) {
    if (amount < 100) {
        alert("Amount to send to a friend should be minimum 100 INR.")
        return
    }

    const resp = {message: "SS"}
    alert(resp.message)

    // if (resp.statusCode == 200) {
    //     alert(resp.message)
    //     window.location.href = redirectUrl || "";
    // } else {
    //     alert(resp.message)
    // }
}

export const SendMoney = () => {
    const [phone, setPhone] = useState("");
    const [value, setValue] = useState(0)

    return <Card title="Send Money to a friend">
        <div className="w-full mt-2">
            <TextInput inputType="text" label={"Phone"} placeholder={"Phone Number"} onChange={(val) => {
                setPhone(val)
            }} />
            <TextInput inputType="number" label={"Amount"} placeholder={"Amount"} onChange={(val) => {
                setValue(Number(val))
            }} />
            
            <div className="flex justify-center pt-4">
                <Button onClick={async () => {
                    await sendMoneyToAFriend(phone,value)
                }}> Send Money </Button>
            </div>
        </div>
    </Card>
}

