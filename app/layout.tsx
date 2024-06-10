export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>

        <div style={{  display:"flex", background:"#cccccc" }}>
          <img src="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/2/AmazonStores/ATVPDKIKX0DER/0b71ed4f0ed54ba9063b5c96c39670e5.w2401.h1081.png" style={{maxWidth:"200px"}}></img>
          <h2 style={{paddingTop:"8px"}}>My Header Custom</h2>
        </div>

        <div style={{ marginLeft: "26px" }}>

          {children}

        </div>


        <div style={{textAlign:"center",  background:"#cccccc", minHeight:"70px", marginTop:"20px" }}>
          <h2 style={{paddingTop:"8px", textAlign:"center",marginTop:"30px"}}>My Footer Custom</h2>
        </div>
      </body>

    </html>
  );
}
