var utils = (function(){
	
	return{
		checkColumns : function ()
		{
			// check all the columns for win value
				for(i=0;i<3;i++)
				{
					if(this.getMarker(0,i)===this.getMarker(1,i)&&this.getMarker(1,i)===this.getMarker(2,i)&&this.getMarker(0,i)!=="")
					{
						return true;
					}
				}
				
				return false;
				
		},	
		
		checkRows : function()
		{
			// check all the rows for win value
				for(i=0;i<3;i++)
				{
					if(this.getMarker(i,0)===this.getMarker(i,1)&&this.getMarker(i,1)===this.getMarker(i,2)&&this.getMarker(i,0)!=="")
					{
						return true;
					}
				}
				
				return false;
				
		},	
		
		checkUpDiagonal : function()
		{
			// check all the rows for win value
				if(this.getMarker(2,0)===this.getMarker(1,1) && this.getMarker(1,1)===this.getMarker(0,2)&&this.getMarker(2,0)!=="")
				{
					return true;
				}
				
				return false;
		},	
		
		checkDownDiagonal : function()
		{
			// check all the rows for win value
				if(this.getMarker(0,0)===this.getMarker(1,1) && this.getMarker(1,1)===this.getMarker(2,2)&&this.this.getMarker(0,0)!=="")
				{
					return true;
				}
				
				return false;
		}	
	}
})();