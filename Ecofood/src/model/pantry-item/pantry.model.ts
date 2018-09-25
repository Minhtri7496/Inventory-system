import { DateTime } from "../../../node_modules/ionic-angular";
import { Url } from "url";

export interface Pantryitem{
key? : string;
title : string;
quantity: string;
description: string;
unit: string;
date: DateTime;
category:string;
related:string;
imageurl : Url;
}