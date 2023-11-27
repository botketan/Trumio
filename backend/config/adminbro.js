
import AdminBro from "admin-bro";
import AdminBroExpress from "admin-bro-expressjs";
import AdminBroMongoose from "admin-bro-mongoose";
import { dummyModel } from "../models/dummy.js";
import {user} from "../models/user.js";
import {post} from "../models/post.js";

AdminBro.registerAdapter(AdminBroMongoose);
const getAdminRouter = (db, mainRouter) => {
  //Check admin access
  const canModifyUsers = ({ currentAdmin }) => currentAdmin;
  const adminBro = new AdminBro({
    databases: [db],
    branding: {
      companyName: "Trumio",
      softwareBrothers: false,
    },
    resources: [
      {
        resource: dummyModel,
        options: {
          properties: {
            _id: {
              isTitle: true,
            },
          },
        },
        resource: user,
        options: {
          properties: {
            _id: {
              isTitle: true,
            },
          },
        },
        resource: post,
        options: {
          properties: {
            _id: {
              isTitle: true,
            },
          },
        },
      },
      
    ],
    rootPath: `/admin`,
    loginPath: `/admin/login`,
    logoutPath: `/admin/logout`,
  });

  // Build and use a router which will handle all AdminBro routes
  const router = AdminBroExpress.buildAuthenticatedRouter(
    adminBro,
    {
      authenticate: async (email, password) => {
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPass = process.env.ADMIN_PASS;
        if (email === adminEmail && adminPass === password) {
          return { email, role: "admin" };
        }
        return false;
      },
    },
    null,
    {
      secret: process.env.SESSION_SECRET,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
      },
      resave: true,
      saveUninitialized: true,
    }
  );

  return router;
};

export default getAdminRouter;
