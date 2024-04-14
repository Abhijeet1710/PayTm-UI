import { Appbar } from "./Appbar";

export function AppbarClient() {
  const session: any = {data: {user: ""}}
  return (
   <div>
      <Appbar onSignin={async () => {}} onSignout={async () => {}} user={session.data?.user} />
   </div>
  );
}
