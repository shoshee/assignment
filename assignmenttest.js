function longFriend(arr){
    var long = arr[0];
     for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
            if( long.length < element.length){
                long = element
                }
                     }
                    return long
                        }

        var  friend = ["abir","abdullah","robin","abdurrohim","ali"]
        var longword = longFriend(friend)
        console.log(longword)