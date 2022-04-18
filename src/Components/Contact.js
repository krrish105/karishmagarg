// Import Statements
import {useState} from "react";
import emailjs from "@emailjs/browser";

export default function Contact(){

    // States for formData and Errors
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [error, setError] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isError, setIsError] = useState(true);
    const [formState, setFormState] = useState("");

    let simpleRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // handleChange function
    const handleChange = (event) => {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    };

    // handleBlur function to check for errors
    const handleBlur = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let errorText;
        
        // Check name field
        if(name === "name"){
            if(value <=  0){
                setError((prev) => ({
                    ...prev,
                    [name]:  "Enter a name."
                }));
                setIsError(true);
            }else{
                setError((prev) => ({
                    ...prev,
                    [name]: ""
                }))
                setIsError(false);
            }
        }

        // Check email field
        if(name === "email"){
            value = value.trim();
            if(value.length <= 0){
                setError((prev) => ({
                    ...prev,
                    [name]: "Enter an email."
                }))
                setIsError(true);
            }else if(!simpleRegex.test(value)){
                setError((prev) => ({
                    ...prev,
                    [name]: "Invalid Email."
                }))
                setIsError(true);
            }else{
                setError((prev) => ({
                    ...prev,
                    [name]: ""
                }))
                setIsError(false);
                setFormData((prev) => ({...prev, [name]: value}));
            }
        }

        // Check subject field
        if(name === "subject") {
            errorText = "Enter a subject of atleast minimum length of 6 letters.";
            if(value.length < 6){
                setError((prev) => ({
                    ...prev,
                    [name]: errorText
                }))
                setIsError(true);
            }else{
                setError((prev) => ({
                    ...prev,
                    [name]: ""
                }))
                setIsError(false);
            }    
        }

        // Check message field
        if(name === "message") {
            errorText = "Enter a message of atleast minimum length of 6 letters.";
            if(value.length < 6){
                setError((prev) => ({
                    ...prev,
                    [name]: errorText
                }))
                setIsError(true);
            }else{
                setError((prev) => ({
                    ...prev,
                    [name]: ""
                }))
                setIsError(false);
            }    
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isError){
            setFormState("There is some Error");
            console.log("error");
            return;
        }else{
            const form = document.querySelector('form');
            emailjs.sendForm('default_service', process.env.REACT_APP_TEMPLATE_ID, form, process.env.REACT_APP_USER_ID)
            .then((res) => {
                setFormState("Mail Received");
                setTimeout(()=>
                {
                    setFormState('');
                }, 6000)
                console.log('SUCCESS!');
            }, function(er) {
                setFormState("There is some Error");
                console.log('FAILED...', er);
            });
        }
    }

    return (
        <div id="contact-form" className="projects grid-container">

            <h2 className="col-6">Contact Me :</h2>

            <form className="col-6" onSubmit={handleSubmit}>

                {/* <!-- Input text field for Name       --> */}
                <label htmlFor="name" id="name-label" className="in">Name:</label>
                <input 
                    type="text" 
                    name = "name" 
                    id="name" 
                    value ={formData.name}
                    placeholder="e.g: John Doe" 
                    onBlur={(e) => handleBlur(e)}
                    onChange = {(e) => handleChange(e)}/>
                <span className="error">{error.name}</span>

                {/* <!-- Input text field for E-mail --> */}
                <label htmlFor="email" id="email-label" className="in">E-mail:</label>
                <input 
                    type="email" 
                    name = "email" 
                    id="email" 
                    value ={formData.email} 
                    placeholder="mail@example.com" 
                    onBlur={(e) => handleBlur(e)}
                    onChange = {(e) => handleChange(e)} />
                <span className="error">{error.email}</span>

                {/* <!-- Input text field for Name       --> */}
                <label htmlFor="subject" id="subject-label" className="in">Subject:</label>
                <input 
                    type="text" 
                    name = "subject" 
                    id="subject" 
                    value = {formData.subject} 
                    placeholder="e.g: Regarding a job." 
                    onBlur={(e) => handleBlur(e)}
                    onChange = {(e) => handleChange(e)} />
                <span className="error">{error.subject}</span>

                {/* <!-- Textarea for any comments --> */}
                <label htmlFor="message" className="in">Message:</label>
                <textarea 
                    id="message" 
                    name = "message" 
                    placeholder="Enter a message for me."
                    value = {formData.message}
                    onBlur={(e) => handleBlur(e)} 
                    onChange = {(e) => handleChange(e)}></textarea>
                <span className="error">{error.message}</span>

                <div className="submit-class">
                    <button id="send-message">Send message</button>
                    <span>{formState}</span>
                </div>

            </form>
        </div>
    );
}