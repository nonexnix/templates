interface Props {
  children: React.ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main className="bg-green-500 h-full">
      <div>{children}</div>
    </main>
  )
}

export default Main
