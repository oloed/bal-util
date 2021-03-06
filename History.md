## History

- v1.8.7 June 19, 2012
	- Defaulted `dependencies` to an empty object, to hopefully fix [npm issue #2540](https://github.com/isaacs/npm/pull/2540)

- v1.8.6 June 19, 2012
	- Split `emitSync` and `emitAsync` out of `EventSystem` and into new `EventEmitterEnhanced` that `EventSystem` extends

- v1.8.5 June 11, 2012
	- Made next callbacks necessary by default

- v1.8.4 June 11, 2012
	- `balUtilModule` changes:
		- `spawn`
			- will now return results in the order of `err`, `stdout`, `stderr`, `code`, `signal`
			- now splits string commands using `/ /`
	- `balUtilFlow` changes:
		- `Group` will now only return error as an array if we have more than one error
	- Updated for Joe v1.0.0

- v1.8.3 June 9, 2012
	- `balUtilCompare` changes:
		- `packageCompare` will now fail gracefully if it receives malformed json

- v1.8.2 June 9, 2012
	- Removed request dependency, we now use the native http/https modules

- v1.8.1 June 9, 2012
	- Restructured directories
	- Removed generated docs, use the wiki instead
	- Now using [Joe](https://github.com/bevry/joe) for tests
	- Travis now tests against node v0.7
	- `balUtilPaths` changes:
		- Added `exists` and `existsSync` to normalize node's 0.6 to 0.8 api differences
	- Made [request](https://github.com/mikeal/request) an optional dependency

- v1.8.0 June 9, 2012
	- Added expiremental `balUtilFlow.Block`
	- Possibly some undocumented `balUtilFlow.Group` changes

- v1.7.0 June 4, 2012
	- `balUtilFlow` changes:
		- `Group` changes:
			- Constructor now supports `next` and `mode` arguments in any order
			- `clear()` now clears everything
			- Added `hasTasks()`
			- Group completion callback's first argument (the error argument) is now an array of errors (or null if no errors)
			- Added `breakOnError` option (defaults to `true`)
			- Added `autoClear` option to clear once all tasks have run (defualts to `false`)

- v1.6.5 May 30, 2012
	- `balUtilFlow` changes:
		- `Group` changes:
			- Reverted the change made in v1.6.4 where errors in callbacks still increment the complete count
				- Instead, you should be using the `hasExited()` instead of `hasCompleted()` which is used to find out if everything passed successfully

- v1.6.4 May 30, 2012
	- `balUtilFlow` changes:
		- Added `flow({object,action,[args],[tasks],next})` to simplify calling a series of functions of an object
		- `Group` changes:
			- If complete callback is called with an error, it'll still increment the complete count (it didn't before)
			- Added `hasExited()`
	- `balUtilPaths` changes:
		- `writeFile` will now call `ensurePath` before writing the file

- v1.6.3 May 22, 2012
	- `balUtilPaths` changes:
		- Fixed a problem introduced with v1.6.0 with `isDirectory` not opening the file before closing it
		- If the number of open files becomes a negative number, we will now throw an error
		- Decreased the max amount of allowed open files from `500` to `100`
		- Increased the wait time for opening a file from `50` to `100`
			- This is now customisable through the global `waitingToOpenFileDelay`

- v1.6.2 May 13, 2012
	- Added support for `balUtilFlow` and `balUtilTypes` to be used inside web browsers

- v1.6.1 May 4, 2012
	- `balUtilPaths` changes:
		- Fixed `initNodeModules`

- v1.6.0 May 4, 2012
	- We now pre-compile our coffee-script
	- `balUtilPaths` changes:
		- Added `readFile`, `writeFile`, `mkdir`, `stat`, `readdir`, `unlink`, `rmdir`
		- Renamed `rmdir` to `rmdirDeep`
	- `balUtilModules` changes:
		- Removed `initGitSubmodules`, `gitPull`
		- Added `initGitRepo`
		- Rewrote `initNodeModules`

- v1.5.0 April 18, 2012
	- `balUtilPaths` changes:
		- `scan` was removed, not sure what it was used for
		- `isDirectory` now returns the `fileStat` argument to the callback
		- `scandir` changes:
			- `ignorePatterns` option when set to true now uses the new `balUtilPaths.commonIgnorePatterns` property
			- fixed error throwing when passed an invalid path
			- now supports a new `stat` option
			- will return the `fileStat` argument to the `fileAction` and `dirAction` callbacks
			- `ignorePatterns` and `ignoreHiddenFiles` will now correctly be passed to child scandir calls
		- `cpdir` and `rpdir` now uses `path.join` and support `ignoreHiddenFiles` and `ignorePatterns`
		- `writetree` now uses `path.join`

- v1.4.3 April 14, 2012
	- CoffeeScript dependency is now bundled
	- Fixed incorrect octal `0700` should have been `700`

- v1.4.2 April 5, 2012
	- Fixed a failing test due to the `bal-util.npm` to `bal-util` rename
	- Improvements to `balUtilModules.spawn`
		- will only return an error if the exit code was `1`
		- will also contain the `code` and `signal` with the results
		- `results[x][0]` is now the stderr string, rather than an error object

- v1.4.1 April 5, 2012
	- Added `spawn` to `balUtilModules`
	- Added `ignoreHiddenFiles` option to `balUtilPaths.scandir`

- v1.4.0 April 2, 2012
	- Renamed `balUtilGroups` to `balUtilFlow`
	- Added `toString`, `isArray` and `each` to `balUtilFlow`
	- Added `rpdir`, `empty`, and `isPathOlderThan` to `balUtilPaths`

- v1.3.0 February 26, 2012
	- Added `openFile` and `closeFile` to open and close files safely (always stays below the maximum number of allowed open files)
	- Updated all path utilities to use `openFile` and `closeFile`
	- Added npm scripts

- v1.2.0 February 14, 2012
	- Removed single and multi modes from `exec`, now always returns the same consistent `callback(err,results)` instead

- v1.1.0 February 6, 2012
	- Modularized
	- Added [docco](http://jashkenas.github.com/docco/) docs

- v1.0 February 5, 2012
	- Moved unit tests to [Mocha](http://visionmedia.github.com/mocha/)
		- Offers more flexible unit testing
		- Offers better guarantees that tests actually ran, and that they actually ran correctly
	- Added `readPath` and `scantree`
	- Added `readFiles` option to `scandir`
	- `scandir` now supports arguments in object format
	- Removed `parallel`
	- Tasks inside groups now are passed `next` as there only argument
	- Removed `resolvePath`, `expandPath` and `expandPaths`, they were essentially the same as `path.resolve`
	- Most functions will now chain
	- `comparePackage` now supports comparing two local, or two remote packages
	- Added `gitPull`

- v0.9 January 18, 2012
	- Added `exec`, `initNodeModules`, `initGitSubmodules`, `EventSystem.when`
	- Added support for no callbacks

- v0.8 November 2, 2011
	- Considerable improvements to `scandir`, `cpdir` and `rmdir`
		- Note, passing `false` as the file or dir actions will now skip all of that type. Pass `null` if you do not want that.
		- `dirAction` is now fired before we read the directories children, if you want it to fire after then in the next callback, pass a callback in the 3rd argument. See `rmdir` for an example of this.
	- Fixed npm web to url warnings

- v0.7 October 3, 2011
	- Added `versionCompare` and `packageCompare` functions
		- Added `request` dependency

- v0.6 September 14, 2011
	- Updated `util.Group` to support `async` and `sync` grouping

- v0.4 June 2, 2011
	- Added util.type for testing the type of a variable
	- Added util.expandPath and util.expandPaths

- v0.3 June 1, 2011
	- Added util.Group class for your async needs :)

- v0.2 May 20, 2011
	- Added some tests with expresso
	- util.scandir now returns err,list,tree
	- Added util.writetree

- v0.1 May 18, 2011
	- Initial commit
