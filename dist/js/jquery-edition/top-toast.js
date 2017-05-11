/**
 *	Created by xing on 01/05/2017.
 */
function CTopToast( _oParent )
{
	var m_oThis		= this;
	var m_sBoardSelector	= "#top-toast";
	var m_sTextSelector	= m_sBoardSelector + " .text";
	var m_nAnimateDelay	= 200;

	//	properties
	this.oParent		= _oParent;


	this.showTopToast = function( sType, sMessage, nDelay )
	{
		if ( nDelay > 100 && nDelay < 3000 )
		{
			m_nAnimateDelay = nDelay;
		}

		return _showTopToast( sType, sMessage );
	};
	this.hideTopToast = function()
	{
		return _hideTopToast();
	};
	this.isTopToastShown = function()
	{
		return _isTopToastShown();
	};

	////////////////////////////////////////////////////////////
	//	Private

	function __construct()
	{
		_setEventHook();
	}

	function _setEventHook()
	{
		$(m_sBoardSelector).off( "click" ).on( "click", function( oEvent )
		{
			oEvent.preventDefault();
			_hideTopToast();
		});
	}

	function _isTopToastShown()
	{
		return ! $(m_sBoardSelector).hasClass( "hide" );
	}
	function _showTopToast( sType, sMessage )
	{
		//
		//	sMessage	- html
		//	sType		- values('ok','alert','error')
		//
		var sAddedClass;
		var nHeight;

		//	...
		sAddedClass	= _getClassNameByType( sType );

		//
		//	set the message to control for display
		//
		$(m_sTextSelector).text( sMessage );

		if ( ! _isTopToastShown() )
		{
			//	mark as shown
			//_setMessageBoardShown( true );

			//	...
			nHeight	= $(m_sBoardSelector)
				.css( "top", "-200px" )
				.removeClass( "hide top-toast-ok top-toast-wrn top-toast-err" )
				.outerHeight();

			$(m_sBoardSelector)
				.css( "z-index", $lgtzi( "div" ) + 1 )
				.css( "left", "0px" )
				.css( "top", ( -1 * nHeight ) + "px" )
				.addClass( sAddedClass )
				.animate( { top: 0 }, m_nAnimateDelay, function(){} )
				.delay( 3000 )
				.queue( function()
				{
					_hideTopToast();
					$( this ).dequeue();
				});
		}

		return true;
	}

	function _hideTopToast()
	{
		var nHeight;

		if ( _isTopToastShown() )
		{
			//	...
			nHeight	= $(m_sBoardSelector)
				.removeClass( "hide" )
				.outerHeight();
			if ( nHeight > 0 )
			{
				$(m_sBoardSelector)
					.animate( { top: ( -1 * nHeight ) }, m_nAnimateDelay, function()
					{
						//	mark as hidden
						//_setMessageBoardShown( false );
						$(m_sBoardSelector).addClass( "hide" );
					});
			}
			else
			{
				$(m_sBoardSelector).addClass( "hide" );
			}
		}
	}

	function _getClassNameByType( sType )
	{
		var sRet;

		switch( sType )
		{
			case "ok" :
				sRet = "top-toast-ok";
				break;
			case "err" :
				sRet = "top-toast-err";
				break;
			case "wrn" :
				sRet = "top-toast-wrn";
				break;
			default:
				sRet = "top-toast-def";
				break;
		}

		return sRet;
	}


	//	...
	__construct();
}