import { BalanceCard } from "../../common/BalanceCard";
import { SendMoney } from "../../common/SendMoneyCard";
import { TransactionsCard } from "../../common/TransactionsCard";

export default function Transfer () {
    const balance = {locked: 10, amount: 1000}

    const p2pTransactions: any = []

    return <div className="w-screen">
        <div className="pl-4 text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            Transfer to friend
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
            <div>
                <SendMoney />
            </div>
            <div>
                <BalanceCard amount={balance.amount} locked={balance.locked} />
                <div className="pt-4">
                    <TransactionsCard transactions={p2pTransactions} title="Personal Transactions"/>
                </div>
            </div>
        </div>
    </div>
}