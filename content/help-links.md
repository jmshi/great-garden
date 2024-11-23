---
title: helpful-links
draft: true
tags:
  - help-doc
---
title: Helpful Links for blogging
---
This is a blank Quartz installation.
See the [documentation](https://quartz.jzhao.xyz) for how to get started.
tldr: 
* use `npx quartz build --serve` to build locally and view at `localhost:8080`.
* use `npx quartz sync [--commit]` to upload local changes to remote github, where `--commit`  is whether you would like to make a commit or not.

# doc on obsidian flavored markdown
internal link: [[https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax]]

[markdown link](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax)  
see [[test-page.md]] for more examples.

# doc on sublime text editor
[https://www.sublimetext.com/docs/](https://www.sublimetext.com/docs/) 
* cmd + s: save the file (use this to get auto reload of the page we are editing)

# Latex math symbols
[Latex link]()

# A showcase [[https://ericdarve.github.io/NLA/Why-eigenvalues]]
[[Eigenvalues|Eigenvalues]] turn a matrix multiplication into a multiplication by a scalar:
$$
A v = \lambda v
$$
[[Diagonalizable matrices|Diagonalizable matrices]] have a full eigenvector basis and can be written in the form:
$$
A = X \Lambda X^{-1}
$$
In this form, taking the power of a matrix is a simple operation:
$$
A^k = X \Lambda^k X^{-1}
$$
We can even compute the function of a matrix by using the eigendecomposition:
$$
f(A) = X f(\Lambda) X^{-1}
$$
where $f(\Lambda)$ is a diagonal matrix with entries $f(\lambda_i)$.

Eigenvalues are very useful to study time-evolving systems. Consider
$$
\frac{dx}{dt} = Mx
$$
We can formally write the solution in the form:
$$
x(t) = \exp(Mt) x_0
$$
where $\exp(Mt)$ is defined as above using functions of matrices:
$$
\exp(Mt) = X \exp(\Lambda t) X^{-1}
$$
with
$$
M = X \Lambda X^{-1}
$$
and where $\exp(\Lambda t)$ is a diagonal matrix with entries $\exp(\lambda_i t)$.

This provides an exact solution to the linear system $\dot{x} = Mx$.
