<?php

class ForumThread extends Eloquent
{
    protected $table = 'forum_threads';

    public function group()
    {
        $this->belongsTo('ForumGroup');
    }

    public function category()
    {
        $this->belongsTo('ForumCategory');
    }

    public function thread()
    {
        $this->belongsTo('ForumThread');
    }

    public function author()
    {
        return $this->belongsTo('User', 'author_id');
    }
}