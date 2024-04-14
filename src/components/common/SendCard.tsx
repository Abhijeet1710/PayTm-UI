import { useState } from "react";
import { Center } from "./Center";
import { Card } from "./card";
import { TextInput } from "./TextInput";
import { Button } from "./button";

export function SendCard() {
    const [_number, setNumber] = useState("");
    const [_amount, setAmount] = useState("");

    return <div className="h-[90vh]">
        <Center>
            <Card title="Send">
                <div className="min-w-72 pt-2">
                    <TextInput inputType="number" placeholder={"Number"} label="Number" onChange={(value) => {
                        setNumber(value)
                    }} />
                    <TextInput inputType="number" placeholder={"Amount"} label="Amount" onChange={(value) => {
                        setAmount(value)
                    }} />
                    <div className="pt-4 flex justify-center">
                        <Button onClick={async () => { }}>Send</Button>
                    </div>
                </div>
            </Card>
        </Center>
    </div>
}