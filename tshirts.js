function size(cms) 
{
    if (cms>=36 && cms<38) 
    {
        return 'S';
    } 
    else if (cms>=38 && cms < 40) 
    {
        return 'M';
    } 
    else if(cms>=40 && cms<=42)
    {
        return 'L';
    }
    else if(cms<36)
    {
        throw new Error('Minimum shoulder size is 36cms');
    }
    else if(cms>=42)
    {
        throw new Error('Maximum shoulder size is 42 cms');
    }
    else
    {
        throw new Error('Error') ;
    }
}
module.exports = size;