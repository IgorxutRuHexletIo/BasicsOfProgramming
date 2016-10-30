import assert from 'assert';

import reference from './reference';
import type from './type';

try {
  reference();
  assert(false);
} catch (e) {
  if (e instanceof ReferenceError) {
    assert(true);
  } else {
    assert(false);
  }
}

try {
  if (typeof type === 'function') {
    type();
  }
  assert(false);
} catch (e) {
  if (e instanceof TypeError) {
    assert(true);
  } else {
    assert(false);
  }
}
