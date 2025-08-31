import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import {join, dirname} from "path"
import { fileURLToPath } from "url";

dotenv.config({path: join(dirname(fileURLToPath(import.meta.url)), "envDir", ".env")})