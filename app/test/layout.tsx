export default function TestLayout({
    children,
    user,
    metrics,
    notifications // will be a page or nested layout
}: {
    children: React.ReactNode
    user: React.ReactNode
    metrics: React.ReactNode
    notifications: React.ReactNode
}) {


    return (
        <div>

            <div style={{ marginLeft: "25px" }}>
                <div>{children}</div>

                <div style={{ display: "flex"}}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div  style={{ margin:"5px",borderStyle:"solid", borderColor:"red", borderWidth:"3px", borderRadius:"5px"}}>{user}</div>
                        <div style={{ margin:"5px",borderStyle:"solid", borderColor:"green", borderWidth:"3px", borderRadius:"5px"}}>{metrics}</div>
                    </div>
                    <div style={{ margin:"5px",borderStyle:"solid", borderColor:"blue", borderWidth:"3px", borderRadius:"5px"}}>
                        {notifications}
                    </div>
                </div>
            </div>
        </div>
    )
}

