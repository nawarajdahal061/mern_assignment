import JsonWebToken from "jsonwebtoken";


const loginController = (req, res, next) => {
    console.log('Login request received', req.body);
    
    
    let { email, password } = req.body;
    if (!email || !password ) 
        res.status(400).send({ message: 'Email and password are required' });



    else {

       // create a token
        let token = JsonWebToken.sign({ email, password }, 'RandomText');
         res.status(200).send({ token: token, message: 'Login successful!',});
    }
};

export default loginController;