const expressJwt = require("express-jwt");

const authJwt = () => {
    const secret = process.env.secret as string;
    const api = process.env.API_URL;
    return expressJwt({
      secret,
      algorithms: ["HS256"],
      isRevoked,
    }).unless({ 
      path: [
        { url: "/", methods: ["GET"] },
        { url: /\/api\/v1\/products(.*)/, methods: ["GET", "OPTIONS"] },
        `${api}/users/login`,
      ],
    }); 

}

async function isRevoked (req: Request, payload: any, done: any) { 
    if (!payload.isAdmin) {
        done(null, true)
    }
    done();
}

export default authJwt;

