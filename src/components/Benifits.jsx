import "../App.css";
import Money from "../assets/Money.png";
import Exchange from "../assets/Exchange.png"; 
import Support from "../assets/Support.png"; 

function Benifits(){
    return(
        <>
        <section id='about' className='BenifitsSection'>
            <div className='container-fluid backgroundsection'>
                <div className='BenifitsHeading  d-flex align-item-center justify-content-center' >
                    <h1 className="category-heading ">Benefits for your expediency</h1>
                </div>
                    <div className='continer-sm'>
                        <div className='row '>
                            <div className='Productcontainer col-4' style={{marginTop:'81px'}}>
                                <div style={{width:'120px',height:'120px',backgroundColor:'#EEEBFF'}} className='Productiamge'>
                                    <img   style={{height:'100px'}} src={Money} alt="" />
                                </div>
                                <div>
                                    <h2 className='mt-4 category-heading' style={{fontWeight:'700'}}>Payment Method</h2>
                                    <h5 className='h5margin'>We offer flexible payment<br/>options, to make easier.</h5>
                                </div>
                            </div>
                            <div className='Productcontainer col-4' style={{marginTop:'81px'}}>
                                <div style={{width:'120px',height:'120px',backgroundColor:'rgb(255, 244, 231)',padding:'10px',borderRadius:'15px'}} className='Productiamge'>
                                    <img   style={{height:'100px'}} src={Exchange} alt="" />
                                </div>
                                <div>
                                    <h2 className='mt-4 category-heading' style={{fontWeight:'700'}}>Return policy</h2>
                                    <h5 className='h5margin'>You can return a product<br/>within 30 days.</h5>
                                </div>

                            </div>
                            <div className='Productcontainer col-4' style={{marginTop:'81px'}}>
                                <div style={{width:'120px',height:'120px',backgroundColor:'rgb(202, 243, 229)',padding:'10px',borderRadius:'15px'}} className='Productiamge'>
                                    <img   style={{height:'100px'}} src={Support} alt="" />
                                </div>
                                <div>
                                    <h2 className='mt-4 category-heading' style={{fontWeight:'700'}}>Customer Support</h2>
                                    <h5 className='h5margin'>Our customer support<br/>is 24/7.</h5>
                                </div>

                            </div>
                        </div>

                    </div>
                
            </div>
        </section>
        </>
    );
}

export default Benifits
