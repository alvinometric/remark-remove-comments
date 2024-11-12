import { Root } from 'mdast';
import { VFile } from 'vfile';

/**
 * Removes every HTML node that matches this [regex](https://github.com/stevemao/html-comment-regex)
 *
 * @returns
 *   Transform.
 */
export default function transformer(): (tree: Root, file?: VFile) => undefined;
