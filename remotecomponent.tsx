import React from "react";
import { Button, Card } from "@uitk/react";

const AnotherComp = (props : any) => {
  return <div style={{ display : 'flex', justifyContent : 'space-between'}}>
    { 
      props.data.map((value : number , index : number)=>{
        return <h1 key={index}>{value}</h1>
      })
    }
  </div>
}

const RemoteCard = (props : any) => {
  return <div style={{  width : '500px' , margin : '1rem', marginLeft : 'auto', marginRight : 'auto'}}> 
          <h1>This is a page rendered from a remote server</h1>
          <AnotherComp data={[1,2,3,4,5]}/>
          <Card {...props} header={<h1>Card Header</h1>}>
            <p>My Card Content</p>
            <br/>
            <hr/>
            <br/>
            <Button block>
              Default
            </Button>
          </Card>
        </div>
};

export default RemoteCard;
