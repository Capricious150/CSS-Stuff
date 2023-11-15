

export default function PostsLayout ({
    children,
  }: {
    children: React.ReactNode
  }) {


    return (
        <div style = {{paddingTop: "8rem", paddingLeft: "20vw", paddingRight: "28vw"}}>
            {children}
        </div>
    )
}