var debug = require('debug')('bugrepro');

debug('\u001b[35mmagenta');//works
debug('\u001b[1mbold');//works
debug('\u001b[35;1mmagentabold');//doesn't
debug('\u001b[35m\u001b[1mmagentathenbold');//only the last one

