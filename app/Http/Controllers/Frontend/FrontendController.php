<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Frontend\FrontendModel;

class FrontendController extends Controller
{
    public function show(){
        return view("frontend.dashboard");
    }

    public function store(Request $request){
        
        $data = new FrontendModel;
        $data->name = $request->name;
        $data->email = $request->email;
        $data->message = $request->message;

        $data->save();

        return redirect()->back();


    }
}
