import React from 'react'

export default function Seniors() {
    const linkedIn = "data:image/png;base64,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"
    const seniorNum = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: "5px"
    }
    const seniorImg = {
        height: "120px",
        width: "120px",
        borderRadius: "50%",
        margin: "30px"
    }
    const profile = {
        height: "50px",
        width: "50px",
        borderRadius: "50%"
    }

    return (
        
        <div className="container">
            <br/>
            <h1><u>About Seniors and Alumini</u></h1> <br/><br/>
            
            <section style={seniorNum}>
                
                <div>
                <h3><u>Senior Name</u></h3>
                <h4>Company, Salary</h4>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                <a href="gmail"><img style={profile} src="https://cdn.icon-icons.com/icons2/652/PNG/512/gmail_icon-icons.com_59877.png"></img></a>
                <a href="linkedin"><img style={profile} src={linkedIn}></img></a>
                

                
                </div>
                <img style={seniorImg} src="https://images.unsplash.com/photo-1614583225359-3db7e5fd6c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8cm9ib3QsIHBvdHJhaXR8fHx8fHwxNjI3ODI3OTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600" alt="senior"></img>
            </section>

            <hr/>

            <section style={seniorNum}>
                <img style={seniorImg} src="https://images.unsplash.com/photo-1487260211189-670c54da558d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLHBlcnNvbnx8fHx8fDE2Mjc4MjgxODQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600" alt="senior"></img>
                
                <div>
                <h3><u>Senior Name</u></h3>
                <h4>Company, Salary</h4>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                
                <a href="gmail"><img style={profile} src="https://cdn.icon-icons.com/icons2/652/PNG/512/gmail_icon-icons.com_59877.png"></img></a>
                <a href="linkedin"><img style={profile} src={linkedIn}></img></a>
                
                </div>

            </section>

            <hr/>

            <section style={seniorNum}>
                
                <div>
                <h3><u>Senior Name</u></h3>
                <h4>Company, Salary</h4>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                
                <a href="gmail"><img style={profile} src="https://cdn.icon-icons.com/icons2/652/PNG/512/gmail_icon-icons.com_59877.png"></img></a>
                <a href="linkedin"><img style={profile} src={linkedIn}></img></a>
                

                </div>

                <img style={seniorImg} src="https://images.unsplash.com/photo-1614583225359-3db7e5fd6c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8cm9ib3QsIHBvdHJhaXR8fHx8fHwxNjI3ODI3OTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600" alt="senior"></img>
            </section>

            <hr/>

            <section style={seniorNum}>
                <img style={seniorImg} src="https://images.unsplash.com/photo-1487260211189-670c54da558d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLHBlcnNvbnx8fHx8fDE2Mjc4MjgxODQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600" alt="senior"></img>
                
                <div>
                <h3><u>Senior Name</u></h3>
                <h4>Company, Salary</h4>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                
                <a href="gmail"><img style={profile} src="https://cdn.icon-icons.com/icons2/652/PNG/512/gmail_icon-icons.com_59877.png"></img></a>
                <a href="linkedin"><img style={profile} src={linkedIn}></img></a>
                
                
                </div>

            </section>

            <hr/>



        </div>
    )
}
