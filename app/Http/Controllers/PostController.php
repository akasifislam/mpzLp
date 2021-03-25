<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function createPost(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:255',
            'body' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['status'=>'error','errors'=>$validator->errors()]);
        }
        Post::create($request->all());
    }
}
