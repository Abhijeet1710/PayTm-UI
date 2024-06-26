import { useState } from "react";
import { Card } from "./card";
import { TextInput } from "./TextInput";
import { Select } from "./Select";
import { Button } from "./button";


const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}];


export async function creditMoneyIntoWallet(_provider: string, amount: number, redirectUrl: string | undefined) {
    if (amount < 1000) {
        alert("Amount to credit into the wallet should be minimum 1000 INR.")
        return
    }

    const resp = {statusCode: 200, message: ""}

    if (resp.statusCode == 200) {
        alert(resp.message)
        window.location.href = redirectUrl || "";
    } else {
        alert(resp.message)
    }
}

export const AddMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
    const [value, setValue] = useState(0)
    return <Card title="Add Money to the Wallet">
        <div className="w-full mt-2">
            <TextInput inputType="number" label={"Amount"} placeholder={"Amount"} onChange={(val) => {
                setValue(Number(val))
            }} />
            <div className="py-4 text-left">
                Bank
            </div>
            <Select onSelect={(value) => {
                setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "");
                setProvider(SUPPORTED_BANKS.find(x => x.name === value)?.name || "");
            }} options={SUPPORTED_BANKS.map(x => ({
                key: x.name,
                value: x.name
            }))} />
            <div className="flex justify-center pt-4">
                <Button onClick={async () => {
                    await creditMoneyIntoWallet(provider, value, redirectUrl)
                }}> Add Money </Button>
            </div>
        </div>
    </Card>
}

