import ConfirmForm from "./Confirm";

export default function ConfirmPage({
  params,
}: {
  params: { guestId: string };
}) {
  return <ConfirmForm />;
}
