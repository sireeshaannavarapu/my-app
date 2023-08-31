import React from "react";


function Accordion(){
    var [x,setX]= React.useState([{
        id: 1,
        title: 'Do I have to allow the use of cookies?',
        info:
          'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
      },
      {
        id: 2,
        title: 'How do I change my My Page password?',
        info:
          'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
      },
      {
        id: 3,
        title: 'What is BankID?',
        info:
          'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
      },
      {
        id: 4,
        title: 'Whose birth number can I use?',
        info:
          'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
      },
      {
        id: 5,
        title: 'When do I recieve a password ordered by letter?',
        info:
          'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
      },
    ])
    function expand(i){
        var temp=([...x])
        temp[i].status=!temp[i].status
        setX([...temp])
    }
        
        
    
    return(

        <div style={{border:'1px solid',width:'700px'}}>
            <h1>Questions And Answers About Login</h1>
            {
                x.map((a,i)=>{
                    return <div>{a.title}
                    <button onClick={()=>{expand(i)}} style={{borderRadius:"20%"}}>+</button>

                    </div>
                    
                })
            }
        </div>
       
    )
   
}
export default Accordion;
