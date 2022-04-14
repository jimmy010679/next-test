export default function NestedLayout({ children }) {
  return (
    <>
      <div>MENU</div>
      <main>{children}</main>
    </>
  )
}