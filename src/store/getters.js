/*
* @Author: Star
* @Date:   2018-08-24 14:16:33
* @Last Modified by:   Star
* @Last Modified time: 2018-09-04 21:19:12
*/

export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen 

export const playlist = state => state.playlist 

export const sequenceList = state => state.sequenceList 

export const mode = state => state.mode 

export const currentIndex = state => state.currentIndex


export const currentSong = (state) => {

	return state.playlist[state.currentIndex] || {}

} 
