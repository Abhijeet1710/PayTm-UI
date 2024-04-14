import { Appbar } from "./Appbar";

export function AppbarClient(props: any) {
  return (
   <div>
      <Appbar onSignin={async () => {}} onSignout={props.onSignout} user={props.session?.data?.user} />
   </div>
  );
}
