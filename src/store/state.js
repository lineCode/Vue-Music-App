/*
* @Author: Star
* @Date:   2018-08-24 14:17:34
* @Last Modified by:   Star
* @Last Modified time: 2018-09-14 16:10:07
*/
import { playMode } from '@/common/js/config' 

const state = {
	singer: {},
	playing: false,
	fullScreen: false,
	// 当前播放列表
	playlist: [],
	sequenceList: [],
	// 播放没事
	mode: playMode.sequence,
	currentIndex: -1,
	// 歌单对象
	disc: {}
}

export default state