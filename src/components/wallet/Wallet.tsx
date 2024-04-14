import { AddMoney } from "../common/components/AddMoneyCard";
import { BalanceCard } from "../common/components/BalanceCard";
import { TransactionsCard } from "../common/components/TransactionsCard";

export default function Wallet () {
    const balance = {amount: 2000, locked: 100};
    const transactions : any = []

    return <div className="w-screen">
        <div className="pl-4 text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            Wallet
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
            <div>
                <AddMoney />
            </div>
            <div>
                <BalanceCard amount={balance.amount} locked={balance.locked} />
                <div className="pt-4">
                    <TransactionsCard transactions={transactions} title="Wallet Transactions" />
                </div>
            </div>
        </div>
    </div>
}