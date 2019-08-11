---
layout: post
title: 三角函数基本关系和公式
description: 常见的三角函数
categories: 三角函数
tags: [三角函数]
copyright: cn
book: 数学手册
---

* content
{:toc}

# 三角函数基本关系和公式

## 诱导公式

<style type="text/css">
.splited-th {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIj4KPGxpbmUgeDE9IjAiIHkxPSIwIiB4Mj0iMzAiIHkyPSIzMCIgc3R5bGU9InN0cm9rZTpibGFjaztzdHJva2Utd2lkdGg6MC41Ii8+Cjwvc3ZnPg==);
  background-size: 100% 100%;
}
</style>

<table style="margin:0 auto;">
<caption style="text-align:center;">三角函数的诱导公式表</caption>
<tr><th style="width:80px;height:50px;padding:0;" class="splited-th">
<div style="position:relative;">
<span style="display:block;position:absolute;top:-20px;left:40px;width:35px;">函数</span>
<span style="display:block;position:absolute;top:0px;left:5px;width:36x;">角</span>
</div>
</th><th>$\sin$</th><th>$\cos$</th><th>$\tan$</th><th>$\cot$</th><th>$\sec$</th><th>$\csc$</th></tr>

<tr><td>$-\alpha$</td> <td>$-\sin\alpha$</td> <td>$\cos\alpha$</td> <td>$-\tan\alpha$</td> <td>$-\cot\alpha$</td> <td>$\sec\alpha$</td> <td>$-\csc\alpha$</td></tr>
<tr><td>$\frac \pi 2 \pm \alpha$</td> <td>$\cos\alpha$</td> <td>$\mp\sin\alpha$</td> <td>$\mp\cot\alpha$</td> <td>$\mp\tan\alpha$</td> <td>$\mp\csc\alpha$</td> <td>$\sec\alpha$</td></tr>
<tr><td>$\pi \pm \alpha$</td> <td>$\mp\sin\alpha$</td> <td>$-\cos\alpha$</td> <td>$\pm\tan\alpha$</td> <td>$\pm\cot\alpha$</td> <td>$-\sec\alpha$</td> <td>$\mp\csc\alpha$</td></tr>
<tr><td>$\frac {3\pi} 2 \pm \alpha$</td> <td>$-\cos\alpha$</td> <td>$\pm\sin\alpha$</td> <td>$\mp\cot\alpha$</td> <td>$\mp\tan\alpha$</td> <td>$\pm\csc\alpha$</td> <td>$-\sec\alpha$</td></tr>
<tr><td>$2\pi \pm \alpha$</td> <td>$\pm\sin\alpha$</td> <td>$\cos\alpha$</td> <td>$\pm\tan\alpha$</td> <td>$\pm\cot\alpha$</td> <td>$\sec\alpha$</td> <td>$\pm\csc\alpha$</td></tr>
<tr><td>$n\pi \pm \alpha$</td> <td>$\pm(-1)^n\sin\alpha$</td> <td>$(-1)^n\cos\alpha$</td> <td>$\pm\tan\alpha$</td> <td>$\pm\cot\alpha$</td> <td>$(-1)^n\sec\alpha$</td> <td>$\pm(-1)^n\csc\alpha$</td></tr>

</table>

表中 $n$ 为整数。


## 基本关系

$$ \sin ^2 \alpha + \cos ^2 \alpha = 1 $$

$$ \tan \alpha = \frac {\sin \alpha}{\cos \alpha} $$

$$ \cot \alpha = \frac {\cos \alpha}{\sin \alpha} $$

$$ \tan \alpha \cdot \cot \alpha = 1 $$

$$ \sin \alpha \cdot \csc \alpha = 1 $$

$$ \cos \alpha \cdot \sec \alpha = 1 $$

$$ \sec ^2 \alpha - \tan ^2 \alpha = 1 $$

$$ \csc ^2 \alpha - \cot ^2 \alpha = 1 $$

---

<center>三角函数的相互关系表</center>

|| $\sin \alpha = x$ | $\cos \alpha = x$ | $\tan \alpha = x$ | $\cot \alpha = x$ | $\sec \alpha = x$ | $\csc \alpha = x$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| $\sin \alpha = $ | $x$ | $\pm \sqrt{1 - x^2}$ | $\pm \frac{x}{\sqrt{1 + x^2}}$ | $\pm \frac{1}{\sqrt{1 + x^2}}$ | $\pm \frac{\sqrt{x^2 - 1}}{x}$ | $\frac{1}{x}$ |
| $\cos \alpha = $ | $\pm \sqrt{1 - x^2}$ | $x$ | $\pm \frac{1}{\sqrt{1 + x^2}}$ | $\pm \frac{x}{\sqrt{1 + x^2}}$ | $\frac{1}{x}$ | $\pm \frac{\sqrt{x^2 - 1}}{x}$ |
| $\tan \alpha = $ | $\pm \frac{x}{\sqrt{1 - x^2}}$ | $\pm \frac{\sqrt{1 - x^2}}{x}$ | $x$ | $\frac{1}{x}$ | $\pm \sqrt{x^2 - 1}$ | $\pm \frac{1}{\sqrt{x^2 - 1}}$ |
| $\cot \alpha = $ | $\pm \frac{\sqrt{1 - x^2}}{x}$ | $\pm \frac{x}{\sqrt{1 - x^2}}$ | $\frac{1}{x}$ | $x$ | $\pm \frac{1}{\sqrt{x^2 - 1}}$ | $\pm \sqrt{x^2 - 1}$ |
| $\sec \alpha = $ | $\pm \frac{1}{\sqrt{1 - x^2}}$ | $\frac{1}{x}$ | $\pm \sqrt{1 + x^2}$ | $\pm \frac{\sqrt{1 + x^2}}{x}$ | $x$ | $\pm \frac{x}{\sqrt{x^2 - 1}}$ |
| $\csc \alpha = $ | $\frac{1}{x}$ | $\pm \frac{1}{\sqrt{1 - x^2}}$ | $\pm \frac{\sqrt{1 + x^2}}{x}$ | $\pm \sqrt{1 + x^2}$ | $\pm \frac{x}{\sqrt{x^2 - 1}}$ | $x$ |

例如，若 $\sin \alpha = x$，则 $\cos \alpha = \pm \sqrt{1 - x^2}$。


## 加法公式

$$ \sin(\alpha \pm \beta) = \sin\alpha \cos\beta \pm \cos\alpha \sin\beta $$

$$ \cos(\alpha \pm \beta) = \cos\alpha \cos\beta \mp \sin\alpha \sin\beta $$

$$ \tan(\alpha \pm \beta) = \frac{\tan\alpha \pm \tan\beta}{1 \mp \tan\alpha \tan\beta} $$

$$ \cot(\alpha \pm \beta) = \frac{\cot\alpha \cot\beta \mp 1}{\cot\beta \pm \cot\alpha} $$

$$ \begin{eqnarray}
\sin(\alpha + \beta + \gamma) &=& \sin\alpha \cos\beta \cos\gamma + \cos\alpha \sin\beta \cos\gamma 
		+ \cos\alpha \cos\beta \sin\gamma - \sin\alpha \sin\beta\sin\gamma \\
	&=& \sin\alpha \sin\beta \sin\gamma(\cot\beta \cot \gamma + \cot\gamma \cot\alpha + \cot\alpha \cot\beta - 1) \\
	&=& \cos\alpha \cos\beta \cos\gamma(\tan\alpha + \tan\beta + \tan\gamma - \tan\alpha \tan\beta \tan \gamma)
\end{eqnarray} $$

$$ \begin{eqnarray}
\cos(\alpha + \beta + \gamma) &=& \cos\alpha \cos\beta \cos\gamma - \cos\alpha \sin\beta \sin\gamma
		- \sin\alpha \cos\beta \sin\gamma - \sin\alpha \sin\beta \cos\gamma \\
	&=& \cos\alpha \cos\beta \cos\gamma (1 - \tan\beta \tan\gamma - \tan\gamma \tan\alpha - \tan\alpha \tan\beta) \\
	&=& - \sin\alpha \sin\beta \sin\gamma (\cot\alpha + \cot\beta + \cot\gamma - \cot\alpha \cot\beta \cot\gamma)
\end{eqnarray} $$

$$ \tan(\alpha + \beta + \gamma) = \frac{\tan\alpha + \tan\beta + \tan\gamma - \tan\alpha \tan\beta \tan\gamma}
{1 - \tan\beta \tan\gamma - \tan\gamma \tan\alpha - \tan\alpha \tan\beta}$$

$$ \cot(\alpha + \beta + \gamma) = \frac{\cot\alpha \cot\beta \cot\gamma - \cot\alpha - \cot\beta - \cot\gamma}
{\cot\beta \cot\gamma + \cot\gamma \cot\alpha + \cot\alpha \cot\beta - 1} $$


## 和差化积公式

$$ \sin\alpha + \sin\beta = 2 \sin\frac{\alpha + \beta}{2} \cos\frac{\alpha - \beta}{2} $$

$$ \sin\alpha - \sin\beta = 2 \cos\frac{\alpha + \beta}{2} \sin\frac{\alpha - \beta}{2} $$

$$ \cos\alpha + \cos\beta = 2 \cos\frac{\alpha + \beta}{2} \cos\frac{\alpha - \beta}{2} $$

$$ \cos\alpha - \cos\beta = -2 \sin\frac{\alpha + \beta}{2} \sin\frac{\alpha - \beta}{2} $$

$$ \tan\alpha \pm \tan\beta = \frac{\sin(\alpha \pm \beta)}{\cos\alpha \cos\beta} $$

$$ \cot\alpha \pm \cot\beta = \pm \frac{\sin(\alpha \pm \beta)}{sin\alpha \sin\beta} $$

$$ \tan\alpha \pm \cot\beta = \pm \frac{\cos(\alpha \mp \beta)}{\cos\alpha \sin\beta} $$

## 积化和差公式

$$ \sin\alpha \sin\beta = - \frac 1 2 [\cos(\alpha + \beta) - \cos(\alpha - \beta)] $$

$$ \cos\alpha \cos\beta = \frac 1 2 [\cos(\alpha + \beta) + \cos(\alpha - \beta)] $$

$$ \sin\alpha \cos\beta = \frac 1 2 [\sin(\alpha + \beta) + \sin(\alpha - \beta)] $$

$$ \cos\alpha \sin\beta = \frac 1 2 [\sin(\alpha + \beta) - \sin(\alpha - \beta)] $$


## 倍角公式

$$ \sin 2\alpha = 2 \sin\alpha \cos\alpha = \frac{2 \tan\alpha}{1 + \tan^2\alpha} $$

$$ \cos 2\alpha = \cos^2\alpha - \sin^2\alpha = 2 \cos^2\alpha - 1 = 1 - 2 \sin^2\alpha = \frac{1 - \tan^2\alpha}{1 + \tan^2\alpha} $$

$$ \tan 2\alpha = \frac{2 \tan\alpha}{1 - \tan^2\alpha} $$

$$ \cot 2\alpha = \frac{\cot^2\alpha - 1}{2 \cot\alpha} $$

$$ \sec 2\alpha = \frac{\sec^2\alpha}{1 - \tan^2\alpha} = \frac{\cot\alpha + \tan\alpha}{\cot\alpha - \tan\alpha} $$

$$ \csc 2\alpha = \frac 1 2 \sec\alpha \csc\alpha = \frac 1 2 (\tan\alpha + \cot\alpha) $$

$$ \sin 3\alpha = -4\sin^3\alpha + 3\sin\alpha $$

$$ \cos 3\alpha = 4\cos^3\alpha - 3\cos\alpha $$

$$ \tan 3\alpha = \frac{3\tan\alpha - \tan^3\alpha}{1 - 3\tan^2\alpha} $$

$$ \cot 3\alpha = \frac{\cot^3\alpha - 3\cot\alpha}{3\cot^2\alpha - 1} $$

$$ \sin n\alpha = n\cos^{n - 1}\alpha \sin\alpha - C_n^3\cos^{n - 3}\alpha \sin^3\alpha + C_n^5\cos^{n - 5}\alpha \sin^5\alpha - \cdots $$

$$ \cos n\alpha = \cos^n\alpha - C_n^2\cos^{n - 2}\alpha \sin^2\alpha + C_n^4\cos^{n - 4}\alpha \sin^4\alpha - C_n^6\cos^{n - 6}\alpha \sin^6\alpha + \cdots $$

式中 $n$ 为正整数。


## 半角公式

下列公式中根号所取符号与等号左边的符号一致。

$$ \sin \frac \alpha 2 = \pm \sqrt{\frac{1 - \cos\alpha} 2} $$

$$ \cos \frac \alpha 2 = \pm \sqrt{\frac{1 + \cos\alpha} 2} $$

$$ \tan \frac \alpha 2 = \pm \sqrt{\frac{1 - \cos\alpha}{1 + \cos\alpha}} = \frac{1 - \cos\alpha}{\sin\alpha} = \frac{\sin\alpha}{1 + \cos\alpha} $$

$$ \cot \frac \alpha 2 = \pm \sqrt{\frac{1 + \cos\alpha}{1 - \cos\alpha}} = \frac{1 + \cos\alpha}{\sin\alpha} = \frac{\sin\alpha}{1 - \cos\alpha} $$

$$ \sec \frac \alpha 2 = \pm \sqrt{\frac{2 \sec\alpha}{\sec\alpha + 1}} $$

$$ \csc \frac \alpha 2 = \pm \sqrt{\frac{2 \sec\alpha}{\sec\alpha - 1}} $$


## 降幂公式

$$ \sin^2\alpha = \frac 1 2 (1 - \cos 2\alpha) $$

$$ \sin^3\alpha = \frac 1 4 (3\sin\alpha - \sin 3\alpha) $$

$$ \sin^4\alpha = \frac 1 8 (3 - 4\cos 2\alpha + \cos 4\alpha) $$

$$ \sin^{2n}\alpha = \frac 1 {2^{2n - 1}} [\sum_{k = 0}^{n - 1}(-1)^{n + k}C_{2n}^k \cos(2n - 2k)\alpha + \frac 1 2 C_{2n}^n] $$

$$ \sin^{2n + 1}\alpha = \frac 1 {2^{2n}} \sum_{k = 0}^n (-1)^{n + k}C_{2n + 1}^k \sin(2n - 2k + 1)\alpha $$

$$ \cos^2\alpha = \frac 1 2(1 + \cos 2\alpha) $$

$$ \cos^3\alpha = \frac 1 4(3\cos\alpha + \cos 3\alpha) $$

$$ \cos^4\alpha = \frac 1 8(3 + 4\cos 2\alpha + \cos 4\alpha) $$

$$ \cos^{2n}\alpha = \frac 1 {2^{2n - 1}}[\sum_{k = 0}^{n - 1} C_{2n}^k \cos(2n - 2k)\alpha + \frac 1 2 C_{2n}^n] $$

$$ \cos^{2n + 1}\alpha = \frac 1 {2^{2n}}\sum_{k = 0}^n C_{2n + 1}^k \cos(2n - 2k + 1)\alpha $$

以上式中的 $n$ 为正整数。


## 三角函数有限和公式

$$ \sum_{j = 1}^{n - 1} \sin \frac{j\pi} n = \cot \frac \pi {2n} $$

$$ \sum_{j = 1}^n \cos \frac{(2j - 1)\pi} n = 0 $$

$$ \sum_{j = 1}^n \cos \frac{(2j - 1)\pi} {2n + 1} = \frac 1 2 $$

$$ \sum_{j = 1}^{n - 1} \sin \frac{2j^2\pi} n = \frac{\sqrt n} 2 (1 + \cos\frac {n\pi} 2 - \sin\frac{n\pi} 2) $$

$$ \sum_{j = 1}^{n - 1} \cos \frac{2j^2\pi} n = \frac{\sqrt n} 2 (1 + \cos\frac {n\pi} 2 + \sin\frac{n\pi} 2) - 1 $$

$$ \sum_{j = 1}^n \cot^2\frac{j\pi}{2n + 1} = \frac 1 3 n(2n - 1) $$

$$ \sum_{j = 1}^n \cot^2\frac{(2j - 1)\pi}{4n} = n(2n - 1) $$

$$ \sum_{j = 1}^n \sec^2\frac{(4j - 3)\pi}{4n} = 2n^2 $$

$$ \sum_{j = 1}^{[\frac{n + 1} 2] - 1} \csc^2\frac{j\pi}{n} = \begin{cases}
	\frac 1 6 (n^2 - 1), &n为奇数\\
	\frac 1 6 (n^2 - 4), &n为偶数
\end{cases}$$

$$ \sum_{j = 1}^{[\frac n 2]} \csc^2\frac{(2j - 1)\pi}{2n} = \begin{cases}
	\frac 1 2 (n^2 - 1), &n为奇数\\
	\frac 1 2 n^2, &n为偶数
\end{cases}$$

$$ \sum_{j = 1}^{2n} \csc^2\frac{j\pi}{2n + 1} = \frac 4 3 n(n + 1) $$

$$ \sum_{j = 1}^n \tan^4\frac{j\pi}{2n + 1} = \frac 1 3 n(2n + 1)(4n^2 + 6n - 1) $$

$$ \sum_{j = 1}^n \cot^4\frac{j\pi}{2n + 1} = \frac 1 {45} n(2n - 1)(4n^2 + 10n - 9) $$

